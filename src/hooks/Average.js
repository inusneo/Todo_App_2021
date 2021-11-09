import React, {useState, useRef, useCallback, useMemo} from 'react';

function Average() {
  const [lists, setLists] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const getAverage = lists => {
    console.log('평균값 계산중...');
    if (lists.length === 0) return 0;
    const sum = lists.reduce((a, b) => a + b);
    return sum / lists.length;
  }

  const onChange = useCallback(e => {
    console.log('컴포넌트가 처음 렌더링 될 때만 함수 생성');
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(e => {
     console.log('number or lists가 바뀌었을 때 함수 생성');
     const nextLists = lists.concat(parseInt(number));
     setLists(nextLists);
     setNumber(''); // number 등록 후 비어있도록
     inputEl.current.focus(); // 커서가 input에 계속 있도록
  }, [number, lists]); // number or lists가 업데이트 되었을 때 딱 한 번 변경

  const avg = useMemo(() => getAverage(lists),[lists]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div><b>평균값 :</b> {avg}</div>
    </div>
  );
}

export default Average;