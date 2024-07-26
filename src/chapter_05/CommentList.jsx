import React, { useState, useRef } from "react";
import Comment from "./Comment";

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
            <h1>React 댓글달기</h1>
            <span>이름 : </span>
            <input id="name" ref={nameRef} onChange={(e) => {nameRef.current = e.target.value}}></input>
            <span>내용 : </span>
            <input id="comment" ref={commentRef} onChange={(e) => {commentRef.current = e.target.value}}></input>
            <button onClick={() => {addInfo()}}>추가</button>
            {
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