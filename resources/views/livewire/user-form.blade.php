<div>
    @if(session('error'))
        <div class="alert alert-danger ">{{ session('error') }}</div>
    @elseif(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif
    
    <form wire:submit.prevent="submit" id="userform">
        <!-- First Name Field -->
        <div class="form-group mb-3">
            <label for="name">First Name</label>
            <input class="form-control" placeholder="Enter first name" type="text" id="firstname" wire:model="firstname">
            @if (isset($errors['firstname']))
                <span class="text-danger">{{ $errors['firstname'][0] }}</span>
            @endif
        </div>
        
        <!-- Last Name Field -->
        <div class="form-group mb-3">
            <label for="lastname">Last Name</label>
            <input class="form-control" placeholder="Enter last name" type="text" id="lastname" wire:model="lastname">
            @if (isset($errors['lastname']))
                <span class="text-danger">{{ $errors['lastname'][0] }}</span>
            @endif
        </div>


        <!-- Email Field -->
        <div class="form-group mb-3">
            <label for="email">Email</label>
            <input class="form-control" placeholder="Enter email" type="email" id="email" wire:model="email">
            @if (isset($errors['email']))
                <span class="text-danger" id="email">{{ $errors['email'][0] }}</span>
            @endif
        </div>

        <!-- Cellphone Field -->
        <div class="form-group mb-3">
            <label for="cellphone">Cell </label>
            <input class="form-control" placeholder="Enter cellphone" type="tel" id="cellphone" wire:model="cellphone">
            @if (isset($errors['cellphone']))
                <span class="text-danger">{{ $errors['cellphone'][0] }}</span>
            @endif
        </div>

        <!-- Message Field -->
        <div class="form-group mb-3">
            <label for="name">Message</label>
            <textarea class="form-control" placeholder="Enter message" id="message" cols="30" rows="10" wire:model="message"></textarea>
        </div>

        <!-- Submit Button -->

        <button type="submit" class="btn btn-sm btn-primary mt-4" id="btn-submit">Submit</button>
    </form>

</div>

@push('scripts')
<script>
    //Listen for custom 'componentMounted' event
    Livewire.on('tel-re-init', () => {
        // Initialize intl-tel-input or any other JavaScript libraries
        $("#cellphone").intlTelInput({
            initialCountry: "ca",
            preferredCountries: ["ca"],
            separateDialCode: true,
            //utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
        });
    });

</script>

@endpush
