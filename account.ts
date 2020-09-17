class account {
    user_id: string;
    currency: string = "CNY";
    pre_balance: number;
    deposit: number;
    withdraw: number;
    WithdrawQuota: number;
    close_profit: number;
    commission: number;
    premium: number;
    static_balance: number;
    position_profit: number;
    float_profit: number;
    balance: number;
    margin: number;
    frozen_margin: number;
    frozen_commission: number;
    frozen_premium: number;
    available: number;
    risk_ratio: number
}

class order{
    seqno: number;
    user_id: string;
    order_id: string;
    exchange_id: string;
    instrument_id: string;
    direction: string;
    offset: string;
    volume_orign: number;
    price_type: string;
    limit_price: number;
    time_condition: string;
    volume_condition: string;
    insert_date_time: number;
    exchange_order_id: string;
    status: string;
    volume_left: number;
    last_msg: string


    get order_time(): Date{
        var t = new Date(this.insert_date_time);
        return t
    }
}


class position{
    user_id: string;
    exchange_id: string;
    instrument_id: string;
    volume_long_today: number;
    volume_long_his: number;
    volume_long: number;
    volume_long_frozen_today: number;
    volume_long_frozen_his: number;
    volume_long_frozen: number;
    volume_short_today: number;
    volume_short_his: number;
    volume_short: number;
    volume_short_frozen_today: number;
    volume_short_frozen_his:number;
    volume_short_frozen: number;
    volume_long_yd: number;
    volume_short_yd: number;
    pos_long_his: number;
    pos_long_today: number;
    pos_short_his: number;
    pos_short_today: number;
    open_price_long: number;
    open_price_short: number;
    open_cost_long: number;
    open_cost_short: number;
    position_price_long: number;
    position_price_short: number;
    position_cost_long: number;
    position_cost_short: number;
    last_price: number;
    float_profit_long: number;
    float_profit_short: number;
    float_profit:number;
    position_profit_long: number;
    position_profit_short: number;
    position_profit: number;
    margin_long: number;
    margin_short: number;
    margin: number;
}

class trade{
    seqno: number;
    user_id: string;
    trade_id: string;
    exchange_id: string;
    instrument_id:string;
    order_id: string;
    exchange_trade_id: string;
    direction: string;
    offset: string;
    volume: number;
    price: number;
    trade_date_time: number;
    commission: number
}

class bank{
    id: string;
    name: string;
    bank_account: string;
    fetch_amount: number;
    qry_count: number;
}

class Account {
    private _account_cookie: string;
    get account_cookie(): string {
        return this._account_cookie;
    }
    set account_cookie(newName: string) {
        this._account_cookie = newName;
    }
    private _password: string;
    get password(): string {
        return this._password;
    }
    set password(password: string) {
        this._password = password;
    }
    ping_gap: number;
    portfolio: string;
    broker_name: string;
    capital_password: string;
    bank_password: string;
    bankid: string;
    investor_name: string;
    money: number;
    pub_host: string;
    settlement: object;
    taskid: any;
    trade_host: string;
    updatetime: string;
    wsuri: string;
    bankname: string;
    trading_day: string;
    status: number;
    accounts: account;
    banks: object;
    event: object;
    orders: object;
    positions: object;
    trades: object;
    transfers: object
}
