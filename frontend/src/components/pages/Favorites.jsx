import { Table } from "react-bootstrap";
import { useGetFavsQuery } from "../../redux/Apis/FavApi";


const Favorites = () => {
    const  {data, isLoading, isFetching} = useGetFavsQuery();

    if (isLoading || isFetching) {
        return <div>Loading....</div>
    }

  return (
    <div className="container mb-5">
        <h1 className="text-center">My Favorites</h1>
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Country</th>
                <th>Website</th>

                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                <tr key={item.index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td><a href={item.web_page} target="_blank">{item.web_page}</a></td>
                   
                </tr>
                ))}
            </tbody>
            </Table>
    </div>
  )
}

export default Favorites