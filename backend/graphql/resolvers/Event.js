require('dotenv').config();
const Event = require('../../models/Event');

const { ValidationError } = require('apollo-server-express');

const eventResolver = {
	Query: {
		events: () => Event.find().populate('user team'),
		findEvent: (_, { input: { id } }) =>
			Event.findById(id)
				.populate('user team')
				.then(event => event),
		findEventsByTeam: async (_, { input: { team } }) => {
			const events = await Event.find({ team: team }).populate('user team');
			return events;
		},
		findEventsByUser: async (_, { input: { user } }) => {
			const events = await Event.find({ team: user }).populate('user team');
			return events;
		}
	},

	Mutation: {
		addEvent: (_, { input }) =>
			new Event({ ...input })
				.save()
				.then(event => event.populate('user team').execPopulate()),
		deleteEvent: (_, { input: { id } }) =>
			Event.findById(id).then(async event => {
				if (event) {
					await Event.findByIdAndDelete({ _id: id });
					return event;
				} else {
					throw new ValidationError("Event doesn't exist.");
				}
			})
	}
};

module.exports = eventResolver;