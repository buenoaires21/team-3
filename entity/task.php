<?php
class Task{
private $idTask:
private $name;
private $description;
private $hasBeenDone;
private $performancePoint;

public function setidTask ($idTask){
    $this->idTask=$idTask;
    }
    public function setname ($name){
    $this->name=$name;
    }
    public function setdescription ($description){
    $this->description=$description;
    }
    public function sethasBeenDone ($hasBeenDone){
    $this->hasBeenDone=$hasBeenDone;
    }
    public function setperformancePoint ($performancePoint){
    $this->performancePoint=$performancePoint;
    }

?>

