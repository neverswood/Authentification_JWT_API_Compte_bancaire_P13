type User = {
  email: string;
  firstName: string;
  lastName: string;
};

/** Class representing a model for user model */
export default class UserDataModel {
  /**
   * Create user activiites data model.
   * @param {User} data - The data value
   */
  email;
  firstName;
  lastName;
  constructor(data: User) {
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
