import {Incalculable} from "./incalculable";

export class Money {
    public value: number;
    public currency: string;


    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    plus(other: Money): Money {
        if (other.currency !== this.currency) {
            throw new Incalculable();
        }
        return money(this.value + other.value, other.currency);
    }

    static money(value: number, currency: string) {
        return new Money(value, currency);
    }

    minus() {
        return new Money(this.value - tax.value, first.currency);
    }
}