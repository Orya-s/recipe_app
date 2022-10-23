import pymysql

class db:
    def __init__(self):
        try:
            self.connection = pymysql.connect(
                host='localhost',
                user='root',
                password="",
                db="recipes_app",      
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
            )
        except pymysql.Error as e:
            print("Error while connecting to MySQL", e)
            
    
    
    # I know this is not the right way to do it but sadly I didn't have the time to 
    # write something better 
    # (my idea was creating a new table with the ingridients of each recipe and compare
    # the names to the diet table, and with WHEN compare the dietry restirctions to the category) 
    def filter_rec(self, rec, dairy_free, gluten_free):
        for r in rec:
            try:
                with self.connection.cursor() as cursor:
                    query = "SELECT * FROM diet d WHERE d.name=%s AND (d.category=%s OR d.category=%s);"
                    cursor.execute(query, (r, dairy_free, gluten_free))
                    result = cursor.fetchall()
                    if len(result) > 0:
                        return False
            except pymysql.Error as e:
                print("Failed to select")  
            
        return True 
        
    