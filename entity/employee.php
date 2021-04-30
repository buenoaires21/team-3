<?php

class Employee{

    private $personalData;
    private $curriculum;
    private $bank;
    private $regional;
    private $role;
    private $generalTask;
    private $id;

    
    public Employee(){

    }

    public function getPersonalData(){

        return $this->personalData;
    }

    public function setPersonalData($personal){

        $this->personalData= $personal;
    }

    public function getCurriculum(){

        return $this->curriculum;
    }

    public function setCurriculum($cv){

        $this->curriculum= $cv;
    }

    public function getBank(){

        return $this->bank;
    }

    public function setBank($bank){

        $this->bank= $bank;
    }

    public function getRegional(){

        return $this->regional;
    }

    public function setRegional($regional){

        $this->regional= $regional;
    }

    public function getRole(){

        return $this->role;
    }

    public function setRole($role){

        $this->role= $role;
    }

    
    public function getRole(){

        return $this->role;
    }

    public function setRole($role){

        $this->role= $role;
    }

    public function getTask(){

        return $this->generalTask;
    }

    public function setTask($task){

        $this->task= $task;
    }

    public function getId(){

        return $this->generalTask;
    }

    public function setId($task){

        $this->task= $task;
    }
}

?>