import axios, { AxiosInstance } from 'axios';
import { modelo } from "@/model/modelo";

export class ModeloClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<modelo>{
        try{
            return (await this.axiosClient.get<modelo> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<modelo[]>{
        try{
            return (await this.axiosClient.get<modelo[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<modelo[]>{
        try{
            return (await this.axiosClient.get<modelo[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(modelo: modelo) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, modelo: modelo) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, modelo)).data
            
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
  