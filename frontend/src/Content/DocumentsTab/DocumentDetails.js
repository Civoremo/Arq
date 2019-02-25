import React from 'react';
import { compose } from 'react-apollo';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Close } from '../MessageBoard/MessageDetail';
import { colors, palette } from '../../colorVariables';
import { deleteDocument } from '../mutations/documents';
import CardActions from '@material-ui/core/CardActions';

//Pretty much all of these components are defined elsewhere,
//we really ought to have a component for modal styling

const StyledDialog = styled(Dialog)`
	max-width: 696px;
	margin: 0 auto;
	/* should add a media query here to make the modal go full screen if less than max width */
`;

const Overlay = styled(DialogContent)`
	background-color: ${colors.button};
	.filepond--wrapper {
		width: 100%;
	}
`;

const Title = styled(DialogTitle)`
	padding-left: 0;
	background-color: ${colors.button};
	h2 {
		color: ${colors.text};
	}
`;

const StyledButton = styled(Button)`
	border-bottom: solid 1px ${palette.yellow};
	color: ${colors.text};
	border-radius: 0px;
	margin: 10px;
`;

class DocumentDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}

	render() {
		const { deleteDocument } = this.props;

		if (this.props.document === null) return <></>;

		return (
			<StyledDialog
				open={this.props.open}
				onClose={this.props.hideModal}
				PaperProps={{
					style: {
						background: `transparent`,
						boxShadow: 'none'
					}
				}}
			>
				<Close>
					<IconButton
						aria-label="Close"
						onClick={this.props.hideModal}
						style={{
							color: colors.text,
							background: palette.plumTransparent
						}}
					>
						<CloseIcon />
					</IconButton>
				</Close>
				<Overlay>
					{/* All fo the folder info should go here 
                    Not just the ability to delete 
                    Should also include a list of all the files */}
					<Title>"{this.props.document.title}" </Title>
					<Title>Stuff is in here but we can not see it just yet</Title>
					<Title>Delete this document? </Title>

					<CardActions
						style={{
							width: '100%',
							display: 'flex',
							flexFlow: 'row',
							justifyContent: 'space-around'
						}}
					>
						<StyledButton
							onClick={e => {
								e.preventDefault();
								deleteDocument({
									id: this.props.document._id
								}).then(() => {
									this.props.hideModal();
								});
							}}
						>
							Delete
						</StyledButton>
					</CardActions>
				</Overlay>
			</StyledDialog>
		);
	}
}

export default compose(deleteDocument)(DocumentDetails);
