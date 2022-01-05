import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const isExistUser = this.usersRepository.findByEmail(email);
    if (isExistUser)
      throw new Error("There is already a user with this email!");
    // Complete aqui
    const user = this.usersRepository.create({ name, email });
    console.log(user);
    return user;
  }
}

export { CreateUserUseCase };
