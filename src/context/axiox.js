const isLocal = false;

const Context = isLocal ? "http://groomerloadbalancer-1779385022.ap-south-1.elb.amazonaws.com/api" 
                        : "http://127.0.0.1:8000";

export default Context;
