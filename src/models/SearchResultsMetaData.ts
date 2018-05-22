export { SearchResultsMetaData }
class SearchResultsMetaData {
    constructor(count: number = 0, isIncomplete: boolean = false) {
        this.total_count = count;
        this.incomplete_results = isIncomplete;
    }

    public total_count: number;
    public incomplete_results: boolean;
}