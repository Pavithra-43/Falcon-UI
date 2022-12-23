export class completeModal {
    constructor(
        public name: string,
        public cURL: string
    ) { }
}

export class wiremockModal {
    constructor(
        public request: Request,
        public response: Response
    ) { }
}

export class Request {
    constructor(
        public urlPath: string,
        public method: string,
        public headers: any = [],
        public queryParameters: any = [],
        public bodyPatterns: any = []

    ) { }

}

export class Header {
    constructor(
        public headers: Map<String, Map<string, string>>
    ) { }
}

export class QueryParam {
    constructor(
        public queryParams: Map<String, Map<String, String>>
    ) { }
}

export class Response {
    constructor(
        public status: number,
        public body: string
    ) { }

}