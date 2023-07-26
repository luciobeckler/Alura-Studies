import React from 'react'
import Button from '../Button'

export default function Form() {
    return (
        <form action="">
            <div>
                <input
                    type="text"
                    placeholder='O que você quer estudar?'
                    required
                    name="tarefa"
                    id="tarefa"
                />
                <label htmlFor="tarefa">Adicione um novo estudo</label>
            </div>
            <div><input
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
            />
                <label htmlFor=""></label>
            </div>
            <Button />
        </form>
    )
}
