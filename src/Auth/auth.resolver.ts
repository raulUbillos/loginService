import { Args, Mutation, Resolver, ResolveReference } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import AuthOutput from "./types/AuthOutput.model";
import GoogleAuthInput from "./types/GoogleAuthInput.model";
import UserLoginInput from "./types/UserLoginInput.model";

@Resolver(of => AuthOutput)
export default class AuthResolver {
    constructor(authService: AuthService){}

    @ResolveReference()
    async resolveReference(){
        return "";
    }

    @Mutation(() => AuthOutput)
    async userLogin(
        @Args('userData') userData: UserLoginInput
    ): Promise<AuthOutput>{
        return {
            user: {
                email: "raulubillos@gmail.com",
                name: "raul",
                username: "racifer"
            },
            token: ""
        }
    }

    @Mutation(() => AuthOutput)
    async googleLogin(
        @Args('userData') userData: GoogleAuthInput
    ): Promise<AuthOutput>{
        return {
            user: {
                email: "raulubillos@gmail.com",
                name: "raul",
                username: "racifer"
            },
            token: ""
        }
    }
}
