import {useHistory} from 'react-router-dom';
function History() {
  const history = useHistory();
  console.log(useHistory(),"here");
    return <>
    <button style={{background:"#C0C0C0"}} onClick={history.goBack}>Backward</button>
    <button style={{background:"#C0C0C0"}} onClick={history.goForward}>Forward</button>
    </>
}
export default History;