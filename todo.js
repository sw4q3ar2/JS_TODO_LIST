class Todo{
    constructor(tennivalo,szuloELEM){
        szuloELEM.append(`
            <tr>
                <th>${tennivalo.feladat}</th>
                <td>X</td>
            </tr>
        `)
    }
}

export default Todo;