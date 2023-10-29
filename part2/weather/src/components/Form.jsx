import { useState, useEffect } from 'react';

function Form({
  search, setSearch, description
}) {
  return (
    <div>
      <form>
        <label>
          {description}: <input onChange = {(event) => setSearch(event.target.value)} value={search} />
        </label>
      </form>
    </div>
  )
}

export default Form;
