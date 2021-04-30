<?php
class Bill{
private $idBill;
private $number;
private $amount;
private $type;

public function getidBill (){
return $this->idBill;
}
public function getnumber (){
return $this->number;
}
public function getamount (){
return $this->amount;
}
public function gettype (){
return $this->type;
}

public function setidBill ($idBill){
$this->idBill=$idBill;
}
public function setnumber ($number){
$this->number=$number;
}
public function setamount ($amount){
$this->amount=$amount;
}
public function settype ($type){
$this->type=$type
}
} 

?>