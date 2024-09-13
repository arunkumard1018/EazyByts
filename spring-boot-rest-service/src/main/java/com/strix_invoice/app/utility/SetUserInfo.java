/**
 * The {@code SetUserInfo$} class represents Functionalities
 *
 * @author ArunKumar D
 */

package com.strix_invoice.app.utility;

import com.strix_invoice.app.Entity.UsersInfo;
import com.strix_invoice.app.model.RegisterUserInfo;

public class SetUserInfo {
    /**
     * Maps the data from {@code RegisterUserInfo} to {@code UsersInfo}.
     *
     * @param registerUserInfo the {@code RegisterUserInfo} object containing the user's registration details.
     * @return the {@code UsersInfo} object populated with the provided data.
     */
    public static UsersInfo mapToUserInfo(RegisterUserInfo registerUserInfo) {
        if (registerUserInfo == null) {
            throw new IllegalArgumentException("RegisterUserInfo cannot be null");
        }
        UsersInfo userInfo = new UsersInfo();
        userInfo.setName(registerUserInfo.getName());
        userInfo.setCity(registerUserInfo.getCity());
        userInfo.setState(registerUserInfo.getState());
        userInfo.setZip(registerUserInfo.getZip());
        userInfo.setAgreedTheTerms(true); // Setting default value for agreed terms
        return userInfo;
    }
}
