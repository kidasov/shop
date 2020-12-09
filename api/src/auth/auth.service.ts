import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.entity";
import { RegisterUserDto } from "src/users/register-user-dto";
import { LoginUserDto } from "src/users/login-user-dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  private async validate(userData: LoginUserDto): Promise<User> {
    return await this.usersService.findByEmail(userData.email);
  }

  public async login(user: LoginUserDto): Promise<any | { status: number }>{
    return this.validate(user).then(userData => {
      if (!userData) {
        return { status: 404 };
      }
      let payload = `${userData.name}${userData.id}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        accessToken,
        user_id: payload,
        status: 200
      }
    })
  }

  public async register(user: RegisterUserDto): Promise<User> {
    return this.usersService.create(user);
  }
}