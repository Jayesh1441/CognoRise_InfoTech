import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import DeleteIcon from '../assets/delete.png'

function TaskCard({heading, tags, handleDelete, index}) {
  return (
    <article className='task_card'>
        <p className="task_text">{heading}</p>

        <div className="task_card_btm_line">
            <div className="task_card_tags">
                {
                  tags.map((tag, index) => <Tag key={index} tagName={tag} selected={true}/>)
                }
            </div>
            <div className="task_delete on" onClick={() => handleDelete(index)}>
                <img src={DeleteIcon} className='delete_icon' alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard