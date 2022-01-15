import { Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../features/GithubUser/actions';
import { RootState } from '../store/store';
import "./Dashboard.css";
import { Pagination } from 'antd';
import { useRef } from 'react';

interface SearchOne {
    Search:any,
}

interface StoreReducer {
    data:any,
}


export const Dashboard = () => {
const querydata = useRef("");
const { Search }:SearchOne = Input;
const dispatch= useDispatch()
const onSearch = (e:string) => {
    querydata.current=e;
    dispatch(getUserList(e,1,12))
};
const {data} = useSelector<RootState,StoreReducer>((state) => ({
    data:state.gitState.data,
}))
console.log("data",data)

const handlePageChange = (page:number,pageSize:number) => {
    console.log(page,pageSize)
    dispatch(getUserList(querydata.current,page,pageSize))
}

    return (
        <div>
            <div className='inputGithub'>
                <Search placeholder="Search Github Profiles" onSearch={onSearch} enterButton />
            </div>
            <div className='profilesDisplay'>
                {data?.items?data.items.map((e:any) => {
                    return (
                    <div key={e.id} className='displayDiv'>
                        <a href={e.html_url} target="_blank" rel="noreferrer"> 
                        <div><img src={e.avatar_url} alt="userimg"></img></div>
                        <div>
                            <h3>{e.login}</h3>
                        </div>
                        </a>
                    </div>
                    )
                }):null}
            </div>
            <div className='pagination'>
               {data?.items?<Pagination defaultCurrent={1} total={data.total_count} defaultPageSize={12} pageSize={12} onChange={handlePageChange}/>:null}
            </div>
        </div>
    )
}