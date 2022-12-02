import Cup from "./Cup";

export default class Player {
    private _name: string;
    private _score: number = 0;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get score(): number {
        return this._score;
    }

    /**
     * Lance le gobelet, met à jour le score et affiche les résultats
     * @param cup Gobelet de la partie
     */
    playTurn(cup: Cup) {
        // Appelle la méthode rollAllDices du gobelet
        cup.rollAllDices();
        // Affecte le score du gobelet au joueur
        this._score = cup.value;
        // Appelle la méthode showPlayerScore pour afficher le score du joueur
        this.showPlayerScore(cup);
    }

    /**
     * Affiche le score du joueur et les valeurs des dés
     * @param cup Gobelet de la partie
     */
    showPlayerScore(cup: Cup): void {
        // Affiche l'attribut score du joueur en passant par le getter
        console.log(`${this.name} Score: ${this.score}`);
        // Appelle le getter 'values' de l'objet cup pour afficher les valeurs des dés
        console.log(`${this.name} Dices: ${cup.values}`);
    }
}