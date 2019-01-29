//
//  Appearance.swift
//  TeamHome
//
//  Created by Daniela Parra on 1/28/19.
//  Copyright © 2019 Lambda School under the MIT license. All rights reserved.
//

import Foundation
import UIKit

enum Appearance {
    static let darkBackgroundColor = UIColor(red: 23/255.0, green: 19/255.0, blue: 27/255.0, alpha: 1.0)
    static let buttonBackgroundColor = UIColor(red: 121/255.0, green: 46/255.0, blue: 74/255.0, alpha: 1.0)
    static let lightMauveColor = UIColor(red: 120/255.0, green: 69/255.0, blue: 85/255.0, alpha: 1.0)
    static let mauveColor = UIColor(red: 121/255.0, green: 46/255.0, blue: 74/255.0, alpha: 1.0)
    static let darkMauveColor = UIColor(red: 45/255.0, green: 25/255.0, blue: 38/255.0, alpha: 1.0)
    static let detailColor = UIColor(red: 97/255.0, green: 82/255.0, blue: 71/255.0, alpha: 1.0)
    static let orangeColor = UIColor(red: 165/255.0, green: 89/255.0, blue: 45/255.0, alpha: 1.0)
    
    static func setTheme() {
        UIButton.appearance().tintColor = Appearance.orangeColor
        
        UILabel.appearance().textColor = .white
        
        UINavigationBar.appearance().barTintColor = Appearance.darkBackgroundColor
        UINavigationBar.appearance().isTranslucent = false
        UINavigationBar.appearance().titleTextAttributes = [NSAttributedString.Key.foregroundColor: Appearance.lightMauveColor]
        
        UITabBar.appearance().barTintColor = Appearance.mauveColor
        UITabBar.appearance().tintColor = .white
        UITabBar.appearance().unselectedItemTintColor = Appearance.darkMauveColor
        UITabBarItem.appearance().setTitleTextAttributes([NSAttributedString.Key.foregroundColor: Appearance.darkMauveColor], for: .normal)
        UITabBarItem.appearance().setTitleTextAttributes([NSAttributedString.Key.foregroundColor: UIColor.white], for: .selected)
        
    }
    
    // Style button with button background color
    static func style(button: UIButton) {
        button.backgroundColor = Appearance.buttonBackgroundColor
        button.layer.cornerRadius = 4
        button.contentEdgeInsets.top = 10
        button.contentEdgeInsets.bottom = 10
    }
}

extension UIViewController {
    func setUpViewAppearance() {
        view.backgroundColor = Appearance.darkBackgroundColor
    }
    
}
