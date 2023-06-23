import axios, { AxiosInstance } from 'axios';
import { condutor } from "@/model/condutor";
  

export class condutorclient{
    private axiosClient: AxiosInstance;


    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<condutor>{
        try{
            return (await this.axiosClient.get<condutor> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<condutor[]>{
        try{
            return (await this.axiosClient.get<condutor[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<condutor[]>{
        try{
            return (await this.axiosClient.get<condutor[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: condutor) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',condutor)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, condutor: condutor) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
            
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