import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class UserLoginInput {
    @Field(() => String)
    username: String;

    @Field(() => String)
    password: String;
}