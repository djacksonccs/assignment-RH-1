import { User } from "./User";
// import { JsonObject, JsonProperty } from "json2typescript";

export { UserSearchResult }

// @JsonObject
class UserSearchResult {
    constructor() {
        this.total_count = 0;
        this.incomplete_results = false;
        this.items = null;
    }


    // @JsonProperty("total_count", Number, true)
    public total_count: number;

    // @JsonProperty("incomplete_results", Boolean, true)
    public incomplete_results: boolean;

    // @JsonProperty("items", [User], true)
    public items: Array<User>;
}