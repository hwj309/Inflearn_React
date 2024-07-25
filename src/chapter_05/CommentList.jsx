import React, { useState, useRef } from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "황선재",
        comment: "안녕하세요. 황선재 입니다."
    },
    {
        name: "유재석",
        comment: "안녕하세요. 유재석 입니다."
    },
    {
        name: "강민경",
        comment: "안녕하세요. 강민경 입니다."
    }
]

function CommentList(props) {
    const [commentss, setCommentss] = useState([]);

    const nameRef = useRef('');
    const commentRef = useRef('');

    function addInfo() {
        let copy = [...commentss];
        copy = [...commentss, { name: nameRef.current, comment: commentRef.current}];
        setCommentss(copy);

        
    }

    return (

        <div>
            <span>이름 : </span>
            <input id="name" ref={nameRef} onChange={(e) => {nameRef.current = e.target.value}}></input>
            <span>내용 : </span>
            <input id="comment" ref={commentRef} onChange={(e) => {commentRef.current = e.target.value}}></input>
            <button onClick={() => {addInfo()}}>추가</button>
            {
            // comments.map((comment) => {
            //     return (
            //     <Comment name={comment.name} comment={comment.comment}/>
            //     );
            // })
            commentss.map((comm, i) => {
                return (
                    <Comment key={i} name={comm.name} comment={comm.comment}/>
                );
            })
        }
        </div>
    );
}

export default CommentList;