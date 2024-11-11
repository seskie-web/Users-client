<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\On; 
use Livewire\WithPagination;
use Illuminate\Support\Facades\Http;

class GetAuthors extends Component
{  
  
    public $authors = [];
    public $loading = true;

    public $errorMessage;

   

    public function mount()
    {
        // Fetch users when the component is mounted
        $this->fetchData();
    }

    #[On('athour-created')] 
    public function fetchData()
    {
        try {
            $response = Http::get('http://127.0.0.1:8000/api/authors');

            if ($response->successful()) {
                $this->authors = $response->json('data');
            } else {
                $this->errorMessage = $response->body();
            }
        } catch (\Exception $e) {
            $this->errorMessage = 'An error occurred: ' . $e->getMessage();
        } finally {
            // Set loading state to false once the request is done
            $this->loading = false;
        }
    }
    public function render()
    {
        return view('livewire.get-authors');
    }
}
