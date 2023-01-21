import { Field, InputType } from "@nestjs/graphql";

@InputType()
export default class GoogleAuthInput {
    @Field(() => String)
    authToken: String;

    @Field(() => String)
    email: String;
}