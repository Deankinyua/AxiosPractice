import ApiClient from "./Api-client";

type Entity = {
    id: number;
}

class HttpService {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getEntities<T>() {
        const controller = new AbortController()        
        const request = ApiClient.get<T[]>(this.endpoint, {
            signal: controller.signal
        })

        return { request, cancel: () => controller.abort()}
    }

    postEntity<T>(entity: T){
        const request = ApiClient.post(this.endpoint, entity)
        return request
    }

    putEntity<T extends Entity>(entity: T){
        const request = ApiClient.put(`${this.endpoint}/${entity.id}`, entity)
        return request;
    }

    deleteEntity(id: number) {
        const request = ApiClient.delete(`${this.endpoint}/${id}`)
        return request
    }
}

const create = (endpoint: string) => {
    return new HttpService(endpoint)
}

export default create;