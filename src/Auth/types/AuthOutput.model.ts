import { Directive, Field, ObjectType } from "@nestjs/graphql";
import UserInfo from "./UserInfo";

@ObjectType()
@Directive('@key( fields:"token" )')
export default class AuthOutput {
    @Field(() => String, { nullable:true })
    token?: String;

    @Field(() => String, { nullable:true })
    refreshToken?: String;

    @Field(() => UserInfo)
    user: UserInfo;
}