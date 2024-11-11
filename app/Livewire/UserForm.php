<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class UserForm extends Component
{   
    public $firstname;
    public $lastname;
    public $email;
    public $cellphone;
    public $message;
    public $errors = [];

    public function mount()
    {
        // Emit event after the component is mounted
        $this->dispatch('tel-re-init');
    }

    // Submit form data to the API
    public function submit()
    {
        try {
            // Send data to the external API
            $response = Http::post('http://127.0.0.1:8000/api/authors', [
                'firstname' => $this->firstname,
                'lastname' => $this->lastname,
                'cellphone' => $this->cellphone,
                'email' => $this->email,
                'message' => $this->message,
            ]);

            if ($response->successful()) {
                session()->flash('success', "Data captured");
                $this->reset('firstname', 'lastname', 'cellphone', 'email', 'message');
                $this->dispatch('athour-created');
                $this->dispatch('tel-re-init');
                $this->errors = [];

            } else {
               
                $this->errors = $response->json()['data'] ?? [];
            }
        } catch (\Exception $e) {
            session()->flash('error', "An error occurred:".  $e->getMessage());
        }
    }


    public function render()
    {
        return view('livewire.user-form');
    }
}
