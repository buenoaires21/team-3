<?php

class Bank{

    private $name;
    private $accountType;


    public Bank(){

    }

    public function getName(){

        return $this-> name;
    }

    public function setName($name){

        $this->name= $name;
    }

    public function getBank(){

        return $this-> bank;
    }

    public function setBank($bank){

        $this->bank = $bank;
    }

}

?>