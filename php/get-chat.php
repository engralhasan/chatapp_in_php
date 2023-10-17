<?php
session_start();
if(isset($_SESSION['unique_id'])){
    include_once "config.php";
    $outgoings_id = mysqli_real_escape_string($conn, $_POST['outgoing_id']);
    $incomings_id = mysqli_real_escape_string($conn, $_POST['incoming_id']); 
    $output ="";

    $sql = "SELECT * FROM messages 
             LEFT JOIN user ON user.unique_id = messages.incoming_mas_id
             WHERE (outgoing_mas_id = {$outgoings_id} AND incoming_mas_id  = {$incomings_id})
             OR (outgoing_mas_id = {$incomings_id} AND incoming_mas_id = {$outgoings_id}) ORDER BY mas_id";


             $query = mysqli_query($conn, $sql);
    if(mysqli_num_rows($query) > 0){
        while($row = mysqli_fetch_assoc($query)){
            if($row['outgoing_mas_id'] === $outgoings_id){
                $output .= '<div class="chat outgoing">
                             <div class="details">
                               <p>'. $row['msg'] .'</p>
                             </div>
                            </div>';

            }else{
                $output .=' <div class="chat incoming">
                              <img src="php/images/'. $row['img'] .' " alt="">
                             <div class="details">
                              <p>'.$row['msg'].'</p>
                             </div>
                            </div>';
                
            }
        }
        echo $output;
    }     


}else{
    header("../login.php");
}
?>