import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import DeleteIcon from '../assets/delete.png'

function TaskCard() {
  return (
    <article className='task_card'>
        <p className="task_text">this is a sample text</p>

        <div className="task_card_btm_line">
            <div className="task_card_tags">
                <Tag Tagname= "HTML" />
                <Tag Tagname= "CSS" />
            </div>
            <div className="task_delete">
                <img src={DeleteIcon} className='delete_icon' alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard