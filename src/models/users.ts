import bcrypt from "bcrypt";
import client from "../database";

const pepper: string = process.env.BCRYPT_PW as string;
const saltRounds: number = parseInt(process.env.SALT_ROUNDS as string);

export type Users = {
  username: string;
  password: string;

};

export class UsersStore {
  show(arg0: string) {
    throw new Error("Method not implemented.");
  }
  async index(): Promise<Users[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users;";

      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async create(u: Users): Promise<void> {
    try {
      console.log("gg2");
      const hash = bcrypt.hashSync(
        u.password + pepper, 
        saltRounds
     );
      const con = await client.connect();
      console.log("gg3");
      const sql =
        "INSERT INTO users (username, password) VALUES($1, $2) RETURNING *";
      const result = await con.query(sql, [u.username, hash]);
      const user = result.rows[0];
      con.release();
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async delete(id: string): Promise<void> {
    const conn = await client.connect();
    const sql = "DELETE FROM users WHERE id=($1)";
    const result = await conn.query(sql, [id]);
  }
  async upadte(id: string): Promise<void> {
    const conn = await client.connect();
    const sql = "UPDATE FROM users WHERE id=($1)";
    const result = await conn.query(sql, [id]);
  }

  async authenticate(loginUser: Users): Promise<Users | null> {
    try{
        const conn = await client.connect();
        const sql = `SELECT * FROM users WHERE username = $1`;

        const result = await conn.query(sql,[loginUser.username]);
        if(result.rows.length > 0){
            const user = result.rows[0];

            if(bcrypt.compareSync(loginUser.password + pepper, user.password)){
                return user;
            }
        }
        return null;
    }catch(err){
        throw new Error(`Could not get users. Error: ${err}`)
    }
}
}

