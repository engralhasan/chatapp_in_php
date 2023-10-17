<?php
 while($row = mysqli_fetch_assoc($sql)){
      $sql12 = "SELECT * FROM messages WHERE (incoming_mas_id = {$row['unique_id']}
               OR outgoing_mas_id = {$row['unique_id']}) AND (outgoing_mas_id = {$outgoing_id}
               OR outgoing_mas_id = {$outgoing_id}) ORDER BY mas_id DESC LIMIT 1";

     $query2 = mysqli_query($conn, $sql12);
     $row2 = mysqli_fetch_assoc($query2);
     if(mysqli_num_rows($query2) > 0){
         $result = $row2['msg'];
     }else{
         $result = "No message avilable";
     }
     //trimming message if word are more than 28
     (strlen($result) > 28)? $mas = substr($result, 0, 28).'...' : $mas = $result;
     ($outgoing_id == $row2['outgoing_mas_id']) ? $you = "You: " : $you = "";
     ($row['status'] == "Offline now") ? $offline = "offline" : $offline = "";

     $output .= '<a href="chat.php?user_id='.$row['unique_id'].'">
                  <div class="content">
                  <img src="php/images/'. $row['img'].'" alt="" />
                  <div class="details">
                      <span>'. $row['fname'] . "" . $row['lname'] .'</span>
                      <p>'.$you .$mas.'</p>
                  </div>
                  </div>
                  <span class="status-dot '.$offline.'"><i class="fas fa-circle"></i></span>
                  </a>';
}

?>