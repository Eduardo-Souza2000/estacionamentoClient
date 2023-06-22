import axios, { AxiosInstance } from 'axios';
import { veiculo } from "@/model/veiculo";

export class VeiculoClient {
    
    private axiosClient: AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-Type': 'application/json'}
        })
    }


    public  async findbyid(id:number) : Promise<veiculo>{
        try{
            return (await this.axiosClient.get<veiculo> (`/${id}`)).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async listAll() : Promise<veiculo[]>{
        try{
            return (await this.axiosClient.get<veiculo[]> ('/lista')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public  async findbyativo() : Promise<veiculo[]>{
        try{
            return (await this.axiosClient.get<veiculo[]> ('/ativo')).data
        }
        catch(error: any){
            return Promise.reject(error.response)
        }
    }


    public async cadastrar(veiculo: veiculo) :Promise<string>{
        try {
            return (await this.axiosClient.post<string>('',veiculo)).data
        } catch (error: any) {
            return Promise.reject(error.response)   
        }

    }

    public async editar (id: number, veiculo: veiculo) :Promise<string>{
        try {
            return (await this.axiosClient.put<string>(`/${id}`, veiculo)).data
            
        } catch (error: any) {
            return Promise.reject(error.response)   
        }
    }

    public async delete (id:number) : Promise<string>{
        try{
            return (await this.axiosClient.delete<string>('/${id}')).data

        }
        catch(error:any)
        {
            return Promise.reject(error.response)

        }
    }


}
  