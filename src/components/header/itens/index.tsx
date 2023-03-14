import itens from "data/itensHeader.json"

export default function Itens() {
    return (
        <>
            {itens.map((iten) => (
                <li key={iten.id}>
                    <a href={iten.link}>
                        {iten.name}
                    </a>
                </li>
            ))}
        </>
    )
}