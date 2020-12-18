export class PasswordValidator {
  private password: string | null = null;

  setPassword(password: string) {
    this.password = password;
  }

  validatePassword(claimedPassword: string) {
    return this.password === claimedPassword;
  }
}