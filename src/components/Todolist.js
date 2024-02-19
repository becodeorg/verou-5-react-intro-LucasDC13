import React from "react";

export default function Todolist() {
    return ( 
        <div className="Todo-list">
          <ul>
            Todos
            <li>
              <input type="checkbox" id="post-1" name="post-1"></input>
              <label for="post-1">First todo</label>
            </li>
            <li>
              <input type="checkbox" id="post-2" name="post-2"></input>
              <label for="post-2">Second todo</label>
            </li>
            <li>
              <input type="checkbox" id="post-3" name="post-3"></input>
              <label for="post-3">Third todo</label>
            </li>
            <li>
              <input type="checkbox" id="post-4" name="post-4"></input>
              <label for="post-4">Fourth todo</label>
            </li>
          </ul>
        </div>
    );
 };