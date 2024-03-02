import create from "./Http-service";

export type Users = {
    id: number;
    name: string;
}

export default create('/users');