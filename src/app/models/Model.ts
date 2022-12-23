export class Model {
    constructor(
        public key: string,
        public methodType: string,
        public headers: SwaggerHeader[],
        public parameters: SwaggerQueryParam[],
        public body: string,
        public responses: string[]
    ) { }
}

export class SwaggerHeader {
    public name: string
    public in: string
    public description: string
    public required: boolean
    public example: string
}

export class SwaggerQueryParam {
    public name: string
    public in: string
    public description: string
    public required: boolean
    public example: string
}