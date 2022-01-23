/* 
Facade
It provides a simplified interface to complex code.

According to Wikipedia:
The facade pattern (also spelled façade) is a software-design pattern commonly used in object-oriented programming. 
Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface 
masking more complex underlying or structural code.
*/

class CPU {
    freeze() {
        console.log('Freezed....')
    }
    jump(position) {
        console.log('Go....')
    }
    execute() {
        console.log('Run....')
    }
}

class Memory {
    load(position, data) {
        console.log('Load....')
    }
}

class HardDrive {
    read(lba, size) {
        console.log('Read....')
    }
}

class ComputerFacade {
    constructor() {
        this.processor = new CPU();
        this.ram = new Memory();
        this.hd = new HardDrive();
    }

    start() {
        this.processor.freeze();
        this.ram.load(this.BOOT_ADDRESS, this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE));
        this.processor.jump(this.BOOT_ADDRESS);
        this.processor.execute();
    }
}

// results
let computer = new ComputerFacade();
computer.start();