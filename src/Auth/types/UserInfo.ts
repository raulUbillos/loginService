import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({
    isAbstract:true
})
export default class UserInfo {
    @Field(() => String, {nullable:true})
    username?: String;

    @Field(() => String, {nullable: true})
    name?: String;

    @Field(() => String, {nullable:true})
    email?: String;
}