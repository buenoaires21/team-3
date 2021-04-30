<?php
class Project{
private $idProject;
private $name;
private $startDate;
private $finishDate;
private $aBill=array();
private $aTask=array();

public function getname (){
return $this-> name;
}
public function getidProject (){
return $this-> idProject;
}
public function getstartDate (){
return $this-> startDate;
}
public function getfinishDate (){
return $this-> finishDate;
}
public function getaBill (){
return $this-> aBill;
}
public function getaTask (){
return $this-> aTask;
}

public function setname ($name){
$this-> name=$name;
}
public function setidProject ($idProject){
$this-> idProject=$idProject;
}
public function setstartDate ($startDate){
$this-> startDate=$startDate;
}
public function setfinishDate ($finishDate){
$this-> finishDate= $finishDate;
}
public function setaBill ($aBill){
$this-> aBill=$aBill;
}
public function setaTask ($aTask){
$this-> aTask=$aTask;
}

}
 ?>