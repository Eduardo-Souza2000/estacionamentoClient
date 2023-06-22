import axios, { AxiosInstance } from 'axios';
import { marca } from "@/model/marca";

export class MarcaClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<marca>{
        try{
            return (await this.axiosClient.get<marca> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<marca[]>{
        try{
            return (await this.axiosClient.get<marca[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<marca[]>{
        try{
            return (await this.axiosClient.get<marca[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(marca: marca) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',marca)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, marca: marca) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, marca)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }

    public async delete (id:number) : Promise<string>{
        try{
            return (await this.axiosClient.delete<string>(`/${id}`)).data

        }
        catch(error:any)
        {
            return Promise.reject(error.response)

        }
    }


}
  