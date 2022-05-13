import React,{useEffect,useState} from 'react'

const arrDiaDiem = [
    {
        id:'HCM',
        name:'TP.Hồ CHí Minh',
        arrQuanHuyen: [
            {id:'01',name:'Quận 1'},
            {id:'02',name:'Quận 2'},
            {id:'03',name:'Quận 3'}
        ]
    },
    {
        id:'HN',
        name:'Hà Nội',
        arrQuanHuyen: [
            {id:'04',name:'Hai Bà Trưng'},
            {id:'05',name:'Hoàn Kiếm'},
            {id:'06',name:'Ba Đình'}
        ]
    }

]

let timeOut = {};
 
export default function DemoUseEffect(props) {

    const [number,setNumber] = useState(1);
    const [like,setLike] = useState(1);
    const [idTP,setIdTP] = useState('')
    const [arrQH,setArrQH] = useState([])

    const renderQuanHuyen = () => {
        if(arrQH.length == 0){
            return <option>Hãy chọn thành phố</option>
        }else{
            return arrQH.map((qh,index)=>{
                return <option key={index} value={qh.id}>{qh.name}</option>
            })
        }
    }

    // useEffect(()=>{
    //     //hàm chạy sau khi giao diện render và sau khi state update
    //     console.log('componentDidMount')
    //     console.log('componentDidUpdate ')
    // })


    // useEffect(()=>{
    //     //Chạy lần đầu tiên sau khi giao diện render
    //     console.log('componentDidMount')
    //     //thường dùng để callapi hoặc chèn thư viện
    // },[])

    useEffect(()=>{
        //Khi tham số 2 thay đổi thì gọi hàm này (tương tự componentDidUpdate)
        //Dựa vào state idTP => để tìm ra được object thành phố
        if(idTP !== ''){
            let thongTinTP = arrDiaDiem.find(tp => tp.id === idTP);
            //lấy ra thuộc tính arrQuanHuyen
            let newArrQH = thongTinTP.arrQuanHuyen;
            //setArrQH = thuộc tính vừa tìm được
            setArrQH(newArrQH)  
        }
        

    },[idTP]) //Shallow compare (number,string,boolean)

   

    useEffect(()=>{


        timeOut =  setInterval(() => {
            console.log('call api')
        }, 1000);
        return ()=>{
            //hàm này sẽ thực thi trước khi component mất khỏi giao diện.Thường dùng để clear các service chạy ngầm(giống component will unmount)
            clearInterval(timeOut)
        }
    },[])


  return (
    <div className='container'>
            DemoUseEffect
            <h3>Number:{number}  </h3>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number + 1)
            }}>+</button>
            <hr/>
            <div className='form-group'>
                <p>Chọn thành phố</p>
                <select className='form-control w-25' value={idTP} onChange={(event)=>{
                    let {value} = event.target;
                    setIdTP(value);
                }}>
                    <option value={''}>Chọn thành phố</option>
                    <option value={'HCM'}>TP. Hồ Chí Minh</option>
                    <option value={'HN'}>Hà Nội</option>
                </select>
            </div>
            <div className='form-group'>
                <p>Chọn Quận Huyện</p>
                <select className='form-control w-25'>
                    {renderQuanHuyen()}
                </select>
            </div>
    </div>
  )
}
