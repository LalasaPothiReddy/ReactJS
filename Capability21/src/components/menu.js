import React,{Component} from 'react';
import './menu.css';
import {NavLink,Link} from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
            <div id="nav">
<ul>
<li><NavLink to='/dashboard'>Dasboard</NavLink>
</li>
<li><NavLink to='/questions'>Questions</NavLink>
<ul>
<li><NavLink to='/questionTopic'>Topic</NavLink></li>
<li><NavLink to='/questionType'>Type</NavLink></li>

<li><NavLink to='/questionComplexity'>Complexity</NavLink></li>
<li><NavLink to='questions'>Questions</NavLink></li>

</ul>
</li>

<li><NavLink to='/answers'>Answers</NavLink>
<ul>
    <li><NavLink to='/answers'>Answers</NavLink></li>
</ul>
</li>
<li><NavLink to='/results'>Results</NavLink>

<ul>
    <li><NavLink to='/results'>Results</NavLink></li>
</ul></li>

</ul>


</div>

        )
    }
}
export default Menu;